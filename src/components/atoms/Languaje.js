const stack = {
  html: { color: 'html', text: 'HTML' },
  javascript: { color: 'js', text: 'JavasScript' },
  typescript: { color: 'ts', text: 'TypeScript' },
  php: { color: 'php', text: 'php' }
}

const Languaje = ({ type }) => {
  console.log('type', type)
  return (
    <div className="flex flex-row space-x-2">
      <div
        className={`w-3 h-3 flex rounded-full self-center bg-${
          stack[type].color || 'bg'
        }`}
      />
      <p className="text-gray-700 text-sm">{stack[type].text}</p>
    </div>
  )
}

export default Languaje
