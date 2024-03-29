import { faqs } from "./../../assets/data/faqs";
import FaqItem from "./faqitem";
const faqList = () => {
  return (
    <ul className="mt-[38px]">
      {faqs.map((item, index) => (
        <FaqItem item={item} key={index} />
      ))}
    </ul>
  );
};

export default faqList;
