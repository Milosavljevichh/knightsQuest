
import knightMoves from "./logic/knightMoves";
import ChessBoard from "./components/chessBoard";

export default function Home() {
  knightMoves([1,1],[1,3])
  return (
    <main>
      <ChessBoard />
    </main>
  );
}
