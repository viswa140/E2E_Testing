package NonFunctional.NFTDefinitionLayer

import com.intuit.karate.gatling.PreDef._
import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder

import scala.concurrent.duration._

class apiSimulation extends Simulation{
val pokemonGetTest: ScenarioBuilder = scenario("Positive: Fetch 10 pokemon characters and validate the schema")
  .exec(karateFeature("classpath:Functional/MicroServiceDefinitionLayer/apiTest.feature@NonFunctional"))

  setUp(
/*     Consider Pokemon API NFRs are to achieve 10 TPS
       For 10 TPS, provide rampUsers = TPS*duration
       For 1 minute => 10 * 60 = 600
       For 30 minutes => 10 * 1800 = 18000
 */
    pokemonGetTest.inject(rampUsers(600) during(60 seconds))

  )
}
