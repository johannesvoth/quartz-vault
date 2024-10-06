import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/extendeddate.scss"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const ExtendedDate: QuartzComponent = ({ displayClass, cfg, fileData }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []

    if(!fileData.dates) {
        return <div class={displayClass}>NO DATE</div>
    }

    // get modified date
    const modified = fileData.dates.modified
    // get created date
    const created = fileData.dates.created

    // return modified and created date
    // format the date in this way: 2001/11-22
    // so yyyy/mm-dd
    return (
        <div class={displayClass}>
            <div class="date">
            <span>Created: {created ? `${created.getFullYear()}/${created.getMonth() + 1}-${created.getDate()}` : "N/A"}</span>
            <span> | </span>
            <span>Modified: {modified ? `${modified.getFullYear()}/${modified.getMonth() + 1}-${modified.getDate()}` : "N/A"}</span>
            </div>
        </div>


    )
  }

  ExtendedDate.css = style
  return ExtendedDate
}) satisfies QuartzComponentConstructor
