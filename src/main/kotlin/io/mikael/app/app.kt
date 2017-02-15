package io.mikael.app

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import java.time.OffsetDateTime
import java.util.concurrent.atomic.AtomicLong

fun main(args: Array<String>) {
    SpringApplication.run(Application::class.java, *args)
}

@SpringBootApplication
open class Application

@Controller
open class SinglePageController {

    @GetMapping("/", "/app", "/app/", "/app/**")
    fun singlePageApplication() = "forward:index.html"

}

@RestController
open class ApiController {

    private val counter = AtomicLong()

    @GetMapping("/api/hello")
    fun hello() = mapOf(
            "name" to "World",
            "counter" to counter.getAndIncrement().toString(),
            "timestamp" to OffsetDateTime.now().toString()
    )

}
