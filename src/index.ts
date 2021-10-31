import { CsvFileReader } from "./CsvFileReader"
import { MatchReader } from "./MatchReader"
import { Summary } from "./Summary"
import { WinsAnalysis } from "./analyzers/WinsAnalysis"
import { ConsoleReports } from "./reportTargets/ConsoleReports"

const csvFileReader = new CsvFileReader("football.csv")
const matchReader = new MatchReader(csvFileReader)
matchReader.load()

const summary = new Summary(
  new WinsAnalysis("Man United"),
  new ConsoleReports()
)

summary.buildAndPrintReport(matchReader.matches)
