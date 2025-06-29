import knightMoves from "./logic/knightMoves";
import ChessBoard from "./components/chessBoard";

export default function Home() {
  // knightMoves([0,0],[7,7])
  return (
    <main className="flex items-center justify-center">
      <ChessBoard />
    </main>
  );
}
