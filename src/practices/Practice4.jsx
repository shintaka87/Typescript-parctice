export const Practice4 = () => {
  const culcTotalFee = (num) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractice = () => culcTotalFee(1000);
  return (
    <div>
      <p>練習問題：指定ファイルを触ってみる</p>
      <button onClick={onClickPractice}>練習問題4を実行</button>
    </div>
  );
};
