

export default function Card1({_id, topic}:{_id:string, topic:string}) {

    return (
        <div key={_id} className="max-w-md rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
          <div  className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-indigo-600">{topic}</div>
          </div>
        </div>
    );
}