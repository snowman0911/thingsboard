///
/// Copyright © 2016-2019 The Thingsboard Authors
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///     http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///

import { BaseData } from '@shared/models/base-data';
import { EntityType } from '@shared/models/entity-type.models';
import { EntityId } from '@shared/models/id/entity-id';
import { AttributeData } from './telemetry/telemetry.models';

export interface EntityInfo {
  origEntity?: BaseData<EntityId>;
  name?: string;
  label?: string;
  entityType?: EntityType;
  id?: string;
  entityDescription?: string;
}

export interface ImportEntityData {
  name: string;
  type: string;
  accessToken: string;
  attributes: {
    server: AttributeData[],
    shared: AttributeData[]
  };
  timeseries: AttributeData[];
}

export interface ImportEntitiesResultInfo {
  create?: {
    entity: number;
  };
  update?: {
    entity: number;
  };
  error?: {
    entity: number;
  };
}