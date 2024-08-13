import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function Home() {
  const { data, error } = useSWR('/api/items', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {data.map(item => (
          <li key={item._id}>
            {item.name} - {item.value} - {item.isDone ? 'Done' : 'Not Done'}
          </li>
        ))}
      </ul>
    </div>
  );
}
