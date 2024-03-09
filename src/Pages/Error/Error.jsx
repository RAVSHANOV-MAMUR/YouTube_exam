import { useParams } from "react-router-dom";

const Error = () => {
  const param = useParams();
  return <div className="error">{""+ param["*"] + " XATOLIK YUZ BERDI CHIQIB KETING "}</div>;
};

export default Error;
