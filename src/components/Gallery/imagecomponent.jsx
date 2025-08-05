import CurvedBottomImageComponent from "./curvedBottomImageComponent"
import FlatBottomImageComponent from "./flatBottomImageComponent"
export default function ImageComponent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12 ">
      <CurvedBottomImageComponent />

      <FlatBottomImageComponent />
    </div>
  )
}
