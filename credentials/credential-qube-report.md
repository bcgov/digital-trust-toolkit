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
fromTime | String  | not NULL | Only alarms that have occurred on or after this date will be returned.
siteAliases | String | not NULL | A list of site aliases. If no Site Aliases or Site Ids or Site Names are specified then alarms for all sites in the organization will be returned.
siteIds | String | not NULL | A list of site ids. If no Site Aliases or Site Ids or Site Names are specified then alarms for all sites in the organization will be returned.
siteNames | String | not NULL | A list of site names. If no Site Aliases or Site Ids or Site Names are specified then alarms for all sites in the organization will be returned.
skip | String | not NULL | Optionally skip a number of alarms. Used for pagination purposes.
top | String | not NULL | Optionally return a number of alarms. Used for pagination purposes.
alarmParameters | String | not NULL | The configured alarm parameters that resulted in the alarm being triggered. Configured either at the organization level or at the site level.
createdAt | String | not NULL | The point in time when the alarm was created in the system.
endTime | String | not NULL | The point in time when the alarm ended. If null then the alarm is ongoing.
id | String | not NULL | The id of the alarm.
maxValue | String | not NULL | The maximum value encountered, above the threshold, in dashboard configured units.
site | String | not NULL | 	object (SiteIdentityModel)
startTime | String | not NULL | The point in time when the alarm started.
triggerValue | String | not NULL | The value above the threshold which initially triggered the alarm, in dashboard configured units.



## Credential Implementation



