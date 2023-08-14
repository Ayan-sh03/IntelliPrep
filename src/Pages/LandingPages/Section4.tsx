const Section4 = () => {
  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-2 
    h-96  max-h-100 p-20 bg-bgColor1 font-montserrat gap-32 text-white  "
    >
      <div className="flex justify-center flex-col align-middle rounded-tl-[40px] rounded-tr-[200px] rounded-br-[200px] rounded-bl-[200px] bg-lightbg ">
        <h2 className="p-10 text-2xl">
          Intelliprep has revolutionized our students’ exam preparation and
          boosted their confidence. Their resources are unbeatable!
        </h2>
        <cite className="text-center">EduStars</cite>
      </div>
      <div className="flex justify-center flex-col align-middle rounded-tl-[200px] rounded-tr-[200px] rounded-br-[35px] rounded-bl-[200px] bg-lightbg">
        <h2 className="p-10 text-2xl">
          A game-changer for exam success. Our students can’t get enough of
          Intelliprep, and neither can we!
        </h2>
        <cite className="text-center">Learnify</cite>
      </div>
    </div>
  );
};

export default Section4;
