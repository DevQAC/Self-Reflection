package com.qa.portal.core.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;
import com.qa.portal.core.service.ReferenceDataManager;


@Service
public class ReferenceDataService {

    private ReferenceDataManager referenceDataManager;

    public ReferenceDataService(ReferenceDataManager referenceDataManager) {
        this.referenceDataManager = referenceDataManager;
    }


    public Map<String, List<String>> getReferenceDataForCategories(List<String> refDataCategories){
        return referenceDataManager.getReferenceDataForCategories(refDataCategories);
    }
}
