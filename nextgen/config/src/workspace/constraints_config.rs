use moon_common::Id;
use rustc_hash::FxHashMap;
use schematic::Config;

#[derive(Debug, Config)]
pub struct ConstraintsConfig {
    #[setting(default = true)]
    pub enforce_project_type_relationships: bool,

    pub tag_relationships: FxHashMap<Id, Vec<Id>>,
}
