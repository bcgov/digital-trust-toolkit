# Qube Report

## Introduction
This document articulates the credential for the Qube Report Credential. 



This governance document has been developed in accordance with the ToIP’s Governance Metamodel Specification created by the Governance Stack Working Group (GSWG) as the template for this framework.

## Terminology and Notation

[Glossary - General Trust Over IP Terms](https://trustoverip.github.io/toip/glossary)

## Localization

1.	The standard language for this governing framework is American English.
 
## Governing Authority

__________________is the governing authority and party legally responsible for developing, maintaining and implementing the Governance Framework. This is the only issuing party. 
The contact for petitioners and relying parties of this GF is:
* 	Name ___________
* 	Title ____________
* 	Organization ___________
* 	Email ____________

## Purpose

Qube Report Credential must be issued by __________________. The structure for the credential ________________________. This __________ governance will allow a more trustworthy ecosystem. This will be built under this governance framework.   

## Scope

The GF only covers the Qube Report Credential

## Schema Definition

This schema definition follows the AnonCreds specification (https://anoncreds-wg.github.io/anoncreds-spec/)

Attribute | Format | Rules | Notes	
--- | --- | --- | --- |
siteAliases | String | not NULL | A list of site aliases. If no Site Aliases or Site Ids or Site Names are specified then alarms for all sites in the organization will be returned.
siteIds | String | not NULL | A list of site ids. If no Site Aliases or Site Ids or Site Names are specified then alarms for all sites in the organization will be returned.
siteNames | String | not NULL | A list of site names. If no Site Aliases or Site Ids or Site Names are specified then alarms for all sites in the organization will be returned.
fromTime | String | not NULL | Only alarms that have occurred on or after this date will be returned. (required) (for example 2023-02-08T16:10:51Z)
toTime | String | not NULL | Only alarms that have occurred on or before this date will be returned.(required) (for example 2023-02-08T16:25:51Z")
equipment | String | not NULL |  The identified piece of equipment involved in an emission. If null then a piece of equipment could not be identified as being associated with the emission.
equipmentGroups | String | not NULL | Array of objects or null (SiteEquipmentGroupModel) The groups of equipment at the site
groupByEquipmentCategory | String | not NULL | When set to true the aggregated volumes are additionally grouped by equipment category.
samplingMethod | String | not NULL | Optionally specify the sampling method to use when sampling site rates
samplePeriod | String | not NULL | Optionally sample the site rates to a specified sampling period. (required)
totalVolume | String | not NULL | The total volume that was emitted over the course of the emission in the dashboard configured unit.
measurementTypes | String | not NULL | The type of measurements that should be returned. (required) 



  

## Credential Implementation



