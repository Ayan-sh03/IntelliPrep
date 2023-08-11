import { ChangeEvent, FormEvent, useState } from "react";
import "../App.css";
import { TiDeleteOutline, TiEdit } from "react-icons/ti";
import { useNavigate } from "react-router";
import axios from "axios";

interface Fprops {
  id?: string;
  title: string;
  content: string;
}
const Flashcard = (props: Fprops) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [flashcard, setFlashcard] = useState<Fprops>({
    id: props.id,
    title: props.title,
    content: props.content,
  });
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");

  async function handleDelete(event: FormEvent) {
    event.preventDefault();
    try {
      const data = await axios.delete(
        `https://intelliprep.onrender.com/${username}/flashcards/${props.id}`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      console.log(data);
    } catch (err) {
      alert(err);
    }
  }
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(flashcard);
    const { title, content } = flashcard;
    const object: Fprops = {
      title,
      content,
    };
    // console.log(title, content);
    try {
      const data = await axios.put<Fprops>(
        `https://intelliprep.onrender.com/${username}/flashcards/${props.id}`,
        object,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      console.log(data);
    } catch (error) {
      alert(error);
    }
  }

  function handleChange(
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setFlashcard((prev: Fprops) => ({ ...prev, [name]: value }));
  }

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none font-montserrat">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Add Flashcard</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <form
                  className="flex flex-col gap-6 mx-10"
                  onSubmit={handleSubmit}
                >
                  <div className=" max-w-xl rounded-md border  p-6 text-black">
                    <div className="m-2 flex flex-col gap-3 rounded-sm text-xl">
                      <label htmlFor="Title">Title</label>
                      <input
                        id="Title"
                        name="Title"
                        value={flashcard?.title}
                        onChange={handleChange}
                        className="text-md hover:box-shadow-3xl hover:box-shadow-white focus:ring-3 focus:ring-blue rounded-md border bg-transparent py-1 indent-3 hover:outline-none focus:ring-inset"
                      />
                    </div>

                    <div className="m-2 flex flex-col gap-3 rounded-sm text-xl">
                      <label htmlFor="Content">Content</label>
                      <textarea
                        id="content"
                        name="content"
                        value={flashcard?.content}
                        onChange={handleChange}
                        className="border-gradient-to-r hover:box-shadow-3xl hover:box-shadow-white h-40 resize-none rounded-md border-2 bg-transparent from-blue-600 to-blue-300"
                      />
                    </div>
                  </div>

                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                      onClick={() => {
                        setShowModal(false);
                        
                      }}
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <div className="flex flex-col gap-2">
        <div className="flip-card font-montserrat ">
          <div className="flip-card-inner">
            <div className="flip-card-front ">
              <p className="title">{props.title}</p>
              <p>Hover Me For Description</p>
            </div>
            <div className="flip-card-back">
              {/* <p className="title">BACK</p> */}
              <p>{props.content}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-2">
          <button onClick={handleDelete}>
            <TiDeleteOutline style={{ fontSize: "2em" }} />
          </button>
          <button onClick={() => setShowModal(true)}>
            <TiEdit style={{ fontSize: "2em" }} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Flashcard;
