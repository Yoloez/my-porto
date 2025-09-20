import { useState } from "react";

function Counter() {
  const [count, setCounter] = useState(0);
  const [color, setColor] = useState("#ffffff");
  return (
    <>
      <div>
        <p>Ini angka {count}</p>
        <button className="text-blue-200 p-4" onClick={() => setCounter(count + 1)}>
          Tambah
        </button>
      </div>

      <div>
        <p>
          Ini warna <span style={{ color: color }}>{color}</span>
        </p>
        <button className="p-4 text-white" onClick={() => setColor("blue")}>
          Ganti Biru
        </button>
      </div>
      <div>
        <p>
          Ini warna <span style={{ color: color }}>{color}</span>
        </p>
        <button className="p-4 text-white" onClick={() => setColor("red")}>
          Ganti Merah
        </button>
      </div>

      <div className="text-nowrap">
        <a href="/">Ke menu utama</a>
      </div>
    </>
  );
}

export default Counter;
