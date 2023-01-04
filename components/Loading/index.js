const Loading = ({ loading }) => (
    loading
      ? <tr>
        <td className="
              absolute opacity-100 z-10 pointer-events-auto
              left-0 right-0 top-0 bottom-0
              bg-[rgba(255,255,255,0.8)] block
              transition-all duration-300 ease-in-out delay-0
              ">
          <div className="
                absolute block text-center
                w-full top-1/2 left-0
                text-base font-roboto font-normal text-[rgba(0,0,0,0.6)]
                translate-y-1/2
                transition-all duration-300 ease-in-out delay-0
              ">
                Loading ...
          </div>
        </td>
      </tr>
      : null
  );
  
export default Loading;  