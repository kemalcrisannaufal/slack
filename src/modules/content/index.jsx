import ContentLayout from "../../common/layouts/ContentLayout";
import contents from "../../common/constant/contents";

const Content = () => {
  return (
    <div>
      {contents.map((item) => (
        <ContentLayout
          key={item.id}
          type={item.id}
          video={item.video}
          title={item.title}
          description={item.description}
          linkLabel={item.linkLabel}
          destination={item.destination}
        />
      ))}
    </div>
  );
};

export default Content;
