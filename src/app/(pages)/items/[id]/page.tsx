type Props = {
  params: {
    id: string;
  };
};

export default async function ProductPage({ params }: Props) {
  const { id } = params;

  return (
    <div>
      <h1>Product ID: {id}</h1>
    </div>
  );
}
