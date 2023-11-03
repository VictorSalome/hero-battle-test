interface Props {
  searchHeroes: (name: string) => void;
}

export default function Search({ searchHeroes }: Props) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    searchHeroes(value);
  };
  return (
    <form className="flex justify-end ">
      <div className="flex m-5  ">
        <div className="relative">
          <input
            onChange={onChange}
            type="search"
            id="search-dropdown"
            className="
            p-2.5
            text-sm
            decoration-none
            text-gray-900
            bg-gray-50
            rounded-lg"
            placeholder="Enter your favorite hero"
          />
        </div>
      </div>
    </form>
  );
}
