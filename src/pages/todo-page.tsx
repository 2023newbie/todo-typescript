import Form from "@/components/Form"
import List from "@/components/List"

const TodoPage = () => {
  return (
    <div className="flex flex-col w-5/6 sm:w-2/3 md:w-1/2 max-w-lg gap-8">
        <Form />
        <List />
    </div>
  )
}

export default TodoPage