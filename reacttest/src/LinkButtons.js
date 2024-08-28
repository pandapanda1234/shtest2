// 画面下のリンクボタンを返す関数
export default function LinkButtons() {
  return (
    <footer className="content">
      <a href="/" className="link-button">トップ</a>
      <a href="/name-age" className="link-button">人物一覧</a>
      <a href="/name-age/create" className="link-button">人物作成</a>
    </footer>
  );
}