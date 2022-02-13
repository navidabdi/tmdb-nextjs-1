import Thumbnail from './Thumbnail'
// import FlipMove from 'react-flip-move'
function Results({ results }) {
  return (
    <div className="3xl:flex my-10 flex-wrap justify-center gap-4 px-5 sm:grid md:grid-cols-2 xl:grid-cols-3">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  )
}

export default Results
