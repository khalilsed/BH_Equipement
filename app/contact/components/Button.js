export default function Button() {
    return (
      <div className="my-3">
        <button
          type="submit"
          style={{
            backgroundColor: "#234189",
            color: "white",
          }}
          className=" px-14 py-2 bg-gray-50 rounded-xl"
        >
          Envoyer
        </button>
      </div>
    );
  }