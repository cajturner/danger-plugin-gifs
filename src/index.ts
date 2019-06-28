// Provides dev-time type structures for  `danger` - doesn't affect runtime.
import { DangerDSLType } from "../node_modules/danger/distribution/dsl/DangerDSL"
declare var danger: DangerDSLType
export declare function message(message: string): void
export declare function warn(message: string): void
export declare function fail(message: string): void
export declare function markdown(message: string): void

/**
 * Surely all PRs require a gif!
 */
export default function gifs(msg?: string) {
  // Replace this with the code from your Dangerfile
  const prDescription = danger.github.pr.body
  const gifRegex = /\.gif/g
  if (!prDescription.match(gifRegex)) {
    message(
      msg ||
        "Whoops! Looks like you forgot to add a gif to this PR's description\n ![Sad gif](https://media.giphy.com/media/r2puuhrnjG7vy/giphy.gif)"
    )
  }
}
