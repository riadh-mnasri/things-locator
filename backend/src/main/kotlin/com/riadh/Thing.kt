package com.riadh

import javax.persistence.Id
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType


@Entity
data class Thing(@Id @GeneratedValue(strategy = GenerationType.IDENTITY) val id: Long?,
                 val name: String,
                 val location: String?)
