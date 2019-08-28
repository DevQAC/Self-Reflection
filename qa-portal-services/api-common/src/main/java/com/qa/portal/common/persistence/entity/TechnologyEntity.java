package com.qa.portal.common.persistence.entity;

//import java.util.Set;
import java.sql.Timestamp;

import javax.persistence.*;


@Entity
@DiscriminatorValue(value = "TECHNOLOGY")
@Table(schema = "training", name = "technology")


public class TechnologyEntity extends QaBaseEntity {

   
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)

    private Integer id;
    
    @Column(name = "technology_name")    
    private String technologyName;

    @Column(name = "technology_category_id")   
    private Integer TechnologyCategoryID;

    @Column(name = "search_string")  
    private String searchString;

    @Column(name = "last_updated_timestamp")
    private Timestamp lastUpdatedTimestamp;

    @Column(name = "last_updated_by")
    private String lastUpdatedBy;

    private Integer version;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTechnologyName() {
		return technologyName;
	}

	public void setTechnologyName(String technologyName) {
		this.technologyName = technologyName;
	}

	public Integer getTechnologyCategoryID() {
		return TechnologyCategoryID;
	}

	public void setTechnologyCategoryID(Integer technologyCategoryID) {
		TechnologyCategoryID = technologyCategoryID;
	}

	public String getSearchString() {
		return searchString;
	}

	public void setSearchString(String searchString) {
		this.searchString = searchString;
	}

	public Timestamp getLastUpdatedTimestamp() {
		return lastUpdatedTimestamp;
	}

	public void setLastUpdatedTimestamp(Timestamp lastUpdatedTimestamp) {
		this.lastUpdatedTimestamp = lastUpdatedTimestamp;
	}

	public String getLastUpdatedBy() {
		return lastUpdatedBy;
	}

	public void setLastUpdatedBy(String lastUpdatedBy) {
		this.lastUpdatedBy = lastUpdatedBy;
	}

	public Integer getVersion() {
		return version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}



}