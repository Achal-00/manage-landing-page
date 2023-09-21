export default function Card(props) {
  return (
    <div>
      <div className="grid gap-[1em] pl-[5%] landscape:hidden">
        <p className="bg-very-pale-red py-[0.5em] rounded-l-full text-dark-blue font-bold">
          <span className="bg-bright-red rounded-full px-[1.5em] py-[0.5em] text-very-light-grey">
            {props.SlNo}
          </span>
          &ensp;{props.heading}
        </p>
        <p className="text-dark-greyish-blue pr-[5%]">{props.content}</p>
      </div>
      <div className="portrait:hidden grid grid-cols-[0.1fr_0.9fr] gap-[1em]">
        <p className="bg-bright-red rounded-full text-very-light-grey text-center py-[0.3em] px-[1.5em]">
          {props.SlNo}
        </p>
        <p className="font-medium self-center">{props.heading}</p>
        <p className="col-start-2 col-end-3 text-dark-greyish-blue">
          {props.content}
        </p>
      </div>
    </div>
  );
}
