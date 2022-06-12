import React from "react";

export function ImagePost() {
  return (
    <div>
      <div className="w-full h-64 flex flex-col justify-center items-center bg-indigo-400 rounded-lg">
        <div
          style={{
            fontSize: "3.5rem",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          The time I{" "}
          <div
            style={{
              color: "#A81632",
              fontSize: "3.5rem",
              fontWeight: "bold",
              lineHeight: "1",
            }}
          >
            messed up
          </div>
        </div>
      </div>
      <div className="text-center" style={{ fontSize: "0.75rem" }}>
        October 21st, 2018 - 4 min read
      </div>
    </div>
  );
}
