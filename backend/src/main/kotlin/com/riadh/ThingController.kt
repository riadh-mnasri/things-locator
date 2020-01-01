package com.riadh

import org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import javax.validation.Valid


@RestController
@RequestMapping("/api")
class ThingController(val thingRepository: ThingRepository) {

    @GetMapping("/things")
    fun getAllThings(): Iterable<Thing> = thingRepository.findAll()

    @PostMapping("/things", produces = [APPLICATION_JSON_UTF8_VALUE])
    fun createNewThing(@Valid @RequestBody thing: Thing): Thing =
        thingRepository.save(thing)

    @GetMapping("/{id}")
    fun retrieveThing(@PathVariable thingId: String): ResponseEntity<Thing> {
        return thingRepository.findById(thingId).map { thing ->
            ResponseEntity.ok(thing)
        }.orElse(ResponseEntity.notFound().build())
    }

    @DeleteMapping("/things/{id}")
    fun deleteThing(@PathVariable id: String) {
        thingRepository.deleteById(id)
    }
}
