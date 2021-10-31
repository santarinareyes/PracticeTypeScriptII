import { CsvFileReader } from "./CsvFileReader"
import { MatchReader } from "./MatchReader"
import { Summary } from "./Summary"
import { WinsAnalysis } from "./analyzers/WinsAnalysis"
import { ConsoleReports } from "./reportTargets/ConsoleReports"
import { HtmlReport } from "./reportTargets/HtmlReports"

const csvFileReader = new CsvFileReader("football.csv")
const matchReader = new MatchReader(csvFileReader)
matchReader.load()

const summary = Summary.winsAnalysisWithHtmlReport("Man What")

summary.buildAndPrintReport(matchReader.matches)
