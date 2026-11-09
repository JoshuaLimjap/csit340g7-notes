import NoteCard from './NoteCard.jsx'

function Notes() {
  return (
    <div className="grid min-h-screen grid-cols-[428px_1fr]">
      <aside className="sticky top-0 flex h-screen flex-col gap-5 bg-white px-8 py-9 shadow-[2px_0_4px_0_rgba(0,0,0,0.05)]">
        <h1 className="text-[72px] leading-none font-extralight text-[#b83f45]">
          notes
        </h1>

        <div>
          <p className="mb-2 text-[13px] font-normal tracking-wide text-[#949494]">SEARCH</p>
          <input
            type="text"
            placeholder="Search by title"
            className="h-[52px] w-full border border-[#e6e6e6] px-4 text-lg outline-none"
          />
        </div>

        <form className="grid gap-3">
          <p className="text-[13px] font-normal tracking-wide text-[#949494]">NEW NOTE</p>
          <input
            name="title"
            placeholder="Title"
            className="h-[52px] w-full border border-[#e6e6e6] px-4 text-lg outline-none"
          />
          <textarea
            name="body"
            placeholder="Write your note"
            className="h-[128px] w-full resize-none py-3 border border-[#e6e6e6] px-4 text-lg outline-none"
          />
          <button
            type="submit"
            className="h-[58px] cursor-pointer bg-[#b83f45] text-[17px] font-normal text-white"
          >
            Add note
          </button>
        </form>
      </aside>

      <section className="px-12 py-11">
        <h2 className="mb-6 text-3xl">All notes</h2>
        <ul className="grid grid-cols-3 items-start gap-5">
          <li className="relative min-h-32 bg-white px-6 py-5 shadow-[0_2px_4px_0_rgba(0,0,0,0.1)]">
            <NoteCard
              title="Review map and filter"
              body="Redo the TodoMVC steps without looking at the guide."
            />
            <button
              type="button"
              className="absolute top-4 right-5 cursor-pointer text-[26px] leading-none text-[#949494]"
            >
              ×
            </button>
          </li>
          <li className="relative min-h-32 bg-white px-6 py-5 shadow-[0_2px_4px_0_rgba(0,0,0,0.1)]">
            <NoteCard
              title="Prepare for the quiz"
              body="Practice writing one handler for many inputs."
            />
            <button
              type="button"
              className="absolute top-4 right-5 cursor-pointer text-[26px] leading-none text-[#949494]"
            >
              ×
            </button>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Notes