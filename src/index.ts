import { CsvFileReader } from "./CsvFileReader"
import { MatchReader } from "./MatchReader"
import { Summary } from "./Summary"
import { WinsAnalysis } from "./analyzers/WinsAnalysis"
import { ConsoleReports } from "./reportTargets/ConsoleReports"
import { HtmlReport } from "./reportTargets/HtmlReports"

const csvFileReader = new CsvFileReader("football.csv")
const matchReader = new MatchReader(csvFileReader)
matchReader.load()

const summary = new Summary(
  new WinsAnalysis("Man United"),
  new HtmlReport("test11")
)

summary.buildAndPrintReport(matchReader.matches)
