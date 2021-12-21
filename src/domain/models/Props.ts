import { Outlay } from "./Outlay";

export type Props = {
    outlays: Outlay[]
    setOutlays: React.Dispatch<React.SetStateAction<Outlay[]>>
  }