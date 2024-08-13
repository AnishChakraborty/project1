import connectToDatabase from '../../../lib/mongoose';
import Item from '../../../models/Item';

export async function GET() {
  await connectToDatabase();
  const items = await Item.find({});
  return new Response(JSON.stringify(items), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request) {
  await connectToDatabase();
  const newItem = await request.json();
  const item = new Item(newItem);
  await item.save();
  return new Response(JSON.stringify(item), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}
