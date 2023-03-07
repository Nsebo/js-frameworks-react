import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  let params = useParams();
  console.log(params);
  return (
    <div>
      <h1>I am ProductDetails page {params.id} </h1>
    </div>
  );
};

export default ProductDetails;
