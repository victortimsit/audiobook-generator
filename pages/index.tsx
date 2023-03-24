import type { NextPage } from "next";
// Import the functions you need from the SDKs you need
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { initializeApp } from "firebase/app";
import { doc, getFirestore, setDoc, Timestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import Header from "../components/Header";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjTe4T_4HnTt3Mtqmha6bEeNeW3zl5g3w",
  authDomain: "shotout-a1bf1.firebaseapp.com",
  projectId: "shotout-a1bf1",
  storageBucket: "shotout-a1bf1.appspot.com",
  messagingSenderId: "479134375142",
  appId: "1:479134375142:web:527b8b903a5414c3852f27",
  measurementId: "G-TVE0VG1C13",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
const db = getFirestore(app);

function isValidEmail(email: string) {
  return /\S+@\S+\.\S+/.test(email);
}

const Home: NextPage = () => {
  const [email, setEmail] = useState<string | null>();
  const [error, setError] = useState<string | null>();
  const [success, setSuccess] = useState<string | null>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  }, [error]);

  const submitEmail = async () => {
    console.log(email);
    if (!email || !isValidEmail(email)) return setError("Invalid email");
    console.log("pass");

    const docRef = doc(db, "audiobooks", email);
    setLoading(true);
    await setDoc(docRef, {
      ts: Timestamp.now(),
      email: email,
    })
      .then(() => {
        setSuccess(`${email} registered`);
        setEmail(null);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {/* <CursorGallery className="fixed inset-0 -z-1" /> */}
      {/* <div className="bg-gradient-to-t from-pink-900/20 to-black/20 fixed inset-0" /> */}
      <div className="bg-gradient-radial from-purple-900/30 to-black/80 from fixed inset-0" />
      <div className="min-h-screen z-10 relative flex flex-col">
        <Header />
        <main className="flex flex-1 flex-col justify-center items-center">
          <section className="flex flex-col items-center justify-center px-3 sm:text-center">
            <h1 className="text-5xl md:text-7xl max-w-5xl md:mx-auto font-bold font-display w-full ">
              Turn any book into an audiobook
              <br />
            </h1>
            {/* <h2 className="mt-8 md:mt-16 text-xl max-w-5xl font-display text-neutral-300">
            Zero reads your terminal logs and helps you understand and fix
            issues faster.
          </h2> */}
            <span className="font-display text-white/70 uppercase tracking-widest hidden md:block mt-16">
              {loading
                ? "Submitting..."
                : error
                ? error
                : success
                ? success
                : "Join the waitlist"}
            </span>

            <div className="flex gap-2 mt-4 mb-4 flex-col sm:flex-row w-full sm:w-auto">
              <input
                value={email ?? ""}
                onInput={(e) => setEmail(e.currentTarget.value)}
                placeholder="Email address"
                type="email"
                className="border-white/30 bg-black/30 rounded font-display px-4 py-4 border text-xl"
              />
              <button
                onClick={submitEmail}
                className="bg-white text-black px-8 py-4 w-full text-xl font-bold rounded font-display"
              >
                Submit
              </button>
            </div>
          </section>
          <section className="flex flex-col items-center justify-center px-3 mt-16">
            <div className="font-display text-white/70 flex gap-2 items-center">
              {/* <PlayIcon className="w-4 h-4" /> */}
              <span>Demo - Harry Potter and the Sorcerer's Stone</span>
            </div>
            <div className="flex gap-4 justify-start items-start mt-4">
              <div
                style={{ fontSize: 8 }}
                className="aspect-[21/29.7] hidden md:block overflow-hidden w-32 md:w-80 p-8 rounded-2xl border-white/10 border-8"
              >
                <div className="text-base font-bold mb-2">
                  Harry Potter and the Sorcerer's Stone
                </div>
                Mr and Mrs Dursley, of number four, Privet Drive, were proud to
                say that they were perfectly normal, thank you very much. They
                were the last people you’d expect to be involved in anything
                strange or mysterious, because they just didn’t hold with such
                nonsense. Mr Dursley was the director of a firm called
                Grunnings, which made drills. He was a big, beefy man with
                hardly any neck, although he did have a very large moustache.
                Mrs Dursley was thin and blonde and had nearly twice the usual
                amount of neck, which came in very useful as she spent so much
                of her time craning over garden fences, spying on the
                neighbours. The Dursleys had a small son called Dudley and in
                their opinion there was no finer boy anywhere. The Dursleys had
                everything they wanted, but they also had a secret, and their
                greatest fear was that somebody would discover it. They didn’t
                think they could bear it if anyone found out about the Potters.
                Mrs Potter was Mrs Dursley’s sister, but they hadn’t met for
                several years; in fact, Mrs Dursley pretended she didn’t have a
                sister, because her sister and her good-for-nothing husband were
                as unDursleyish as it was possible to be. The Dursleys shuddered
                to think what the neighbours would say if the Potters arrived in
                the street. The Dursleys knew that the Potters had a small son,
                too, but they had never even seen him. This boy was another good
                reason for keeping the Potters away; they didn’t want Dudley
                mixing with a child like that. When Mr and Mrs Dursley woke up
                on the dull, grey Tuesday our story starts, there was nothing
                about the cloudy sky outside to suggest that strange and
                mysterious things would soon be happening all over the country.
                Mr Dursley hummed as he picked out his most boring tie for work
                and Mrs Dursley gossiped away happily as she wrestled a
                screaming Dudley into his high chair. None of them noticed a
                large tawny owl flutter past the window. At half past eight, Mr
                Dursley picked up his briefcase, pecked Mrs Dursley on the cheek
                and tried to kiss Dudley goodbye but missed, because Dudley was
                now having a tantrum and throwing his cereal at the walls.
              </div>
              <ArrowRightIcon className="hidden  md:block w-8 h-8 text-white/30 mt-36" />
              <video
                className="aspect-square w-full md:w-80 object-cover rounded-2xl border-white/10 border-8"
                src="/demo.mp4"
                controls
              />
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
