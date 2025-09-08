import { FC } from "react";
import pdf from "@/static/oferta_ytenok.pdf";

const OffertaPage: FC = () => {
  return (
    <div className="">
      <iframe
        src={pdf}
        title="Просмотр PDF"
        width="1200"
        height="800"
        style={{ border: "none" }}
      />
    </div>
  );
};

export default OffertaPage;
