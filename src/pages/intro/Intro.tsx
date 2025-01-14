import MyToolCard from '@pages/myPage/components/toolCard/MyToolCard';

const Intro = () => {
  return (
    <MyToolCard
      toolLogo=""
      toolNameMain="ChatGPT"
      keyWordList={[
        { keyWordId: 3, keyWordName: '디자인' },
        { keyWordId: 4, keyWordName: '프로토타입' },
      ]}
    />
  );
};

export default Intro;
