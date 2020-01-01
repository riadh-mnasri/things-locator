package com.riadh

import org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import javax.validation.Valid


@RestController
@RequestMapping("/api")
class ThingController(val thingRepository: ThingRepository) {

    @CrossOrigin
    @GetMapping("/things", produces = [APPLICATION_JSON_UTF8_VALUE])
    fun getAllThings(): Iterable<Thing> = thingRepository.findAll()

    @CrossOrigin
    @PostMapping("/things", consumes = [APPLICATION_JSON_UTF8_VALUE], produces = [APPLICATION_JSON_UTF8_VALUE])
    fun createNewThing(@Valid @RequestBody thingDTO: ThingDTO): Thing =
        thingRepository.save(thingDTO.toEntity())

    @CrossOrigin
    @GetMapping("/things/{id}", produces = [APPLICATION_JSON_UTF8_VALUE])
    fun retrieveThing(@PathVariable(value = "id") thingId: Long): ResponseEntity<Thing> {
        return thingRepository.findById(thingId).map { thing ->
            ResponseEntity.ok(thing)
        }.orElse(ResponseEntity.notFound().build())
    }

    @CrossOrigin
    @PutMapping("/things/{id}")
    fun updateThingById(@PathVariable(value = "id") thingId: Long,
                        @Valid @RequestBody newThing: Thing): ResponseEntity<Thing> {

        return thingRepository.findById(thingId).map { existingThing ->
            val updatedThing: Thing = existingThing
                .copy(name = newThing.name, location = newThing.location)

            ResponseEntity.ok().body(thingRepository.save(updatedThing))
        }.orElse(ResponseEntity.notFound().build())
    }


    @CrossOrigin
    @DeleteMapping("/things/{id}")
    fun deleteThing(@PathVariable id: Long) {
        thingRepository.deleteById(id)
    }
}
