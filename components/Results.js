import Thumbnail from './Thumbnail'

function Results({ results }) {
  return (
    <div className="3xl:flex my-8 flex-wrap justify-center gap-10 sm:grid md:grid-cols-2 xl:grid-cols-4">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  )
}

export default Results
