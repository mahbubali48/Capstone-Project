import {
  mockBuildings,
  getBuildingById as getMockBuildingById,
} from '../data/mockBuildings'

// Temporary frontend service layer.
//
// Right now these functions return local mock data.
// When the backend API is ready, we can replace the logic inside these
// functions with fetch() calls without changing the pages that use them.

export async function getBuildings() {
  return mockBuildings
}

export async function getBuilding(id) {
  return getMockBuildingById(id)
}