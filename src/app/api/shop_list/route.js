import clientPromise from '@/lib/mongodb';
import { CITY_MAP } from '@/constants/index';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const cityKey = searchParams.get('address');
  const city = CITY_MAP[cityKey];
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '20', 10);

  try {
    const client = await clientPromise;
    const db = client.db('onel-list'); // 여기에 실제 MongoDB 데이터베이스 이름을 입력하세요.

    let query = {};
    if (city) {
      if (Array.isArray(city)) {
        query = { addresses: { $in: city.map(c => new RegExp(c)) } };
      } else {
        query = { addresses: new RegExp(`^${city}`) };
      }
    }

    const shops = await db.collection('nailshops')
      .find(query, { projection: { _id: 1, shop_id: 1, title: 1, image_urls: 1, addresses: 1 } })
      .skip((page - 1) * limit)
      .limit(limit)
      .toArray();

    return new Response(JSON.stringify(shops), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}