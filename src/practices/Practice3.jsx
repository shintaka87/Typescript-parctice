export const Practice3 = () => {
  const getTotalFee = (num: Number): Number => {
    const total = num * 1.1;
    return total;
  };
  const onClickPractice = () => {
    let total: Number = 0;
    total = getTotalFee(1000);
    console.log(total);
  };
  return (
    <div>
      <p>練習問題：変数の型指定</p>
      <button onClick={onClickPractice}>練習問題3を実行</button>
    </div>
  );
};
