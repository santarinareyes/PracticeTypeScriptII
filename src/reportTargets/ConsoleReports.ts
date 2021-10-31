import { OutputTarget } from "../Summary"

export class ConsoleReports implements OutputTarget {
  //   constructor(public outputTarget: void) {}

  print(report: string): void {
    console.log(report)
  }
}
