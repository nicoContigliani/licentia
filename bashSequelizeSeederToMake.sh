nombres=("20231011110322-create-module.js")

for elemento in "${nombres[@]}"; do
  echo "$elemento"
  sequelize db:seed --seed "$elemento"

done


#  sequelize db:seed --seed 20230630200222-User.js


# "seeders/20230706121248-Role.js" "seeders/20230706121250-Permission.js" "seeders/20230706121252-RollUser.js" "seeders/20230706121254-PermissionRoll.js" "seeders/20230706121256-Historical.js" "seeders/20230706121257-HistoricalUser.js" "seeders/20230706135250-Company.js" "seeders/20230706135252-Branch.js" "seeders/20230706135259-BrachUser.js" "seeders/20230717131156-SectionType.j" 


# "seeders/20230717131159-Section.js" "seeders/20230717131202-CVSection.js" "seeders/20230717131209-CV.js" "seeders/20230717205559-Item.js" "seeders/20230717205619-itemSection.js" "seeders/20230731121631-TypeTest.js" "seeders/20230731121634-Test.js" "seeders/20230731121637-Result.js" "seeders/20230731121639-ResultTest.js" "seeders/20230731121642-TestInterview.js" "seeders/20230731121645-Interview.js" "seeders/20230731121647-Vacancy.js" "seeders/20230731121650-InterviewVacance.js" "seeders/20230731121653-InterviewResponsible.js" "seeders/20230731121655-InterviewUser.js" "seeders/20230731122435-CompanyVacances.j"s


      # Role.belongsToMany(models.User, { through: models.RollUser });
      # Role.belongsToMany(models.Permission, { through: models.PermissionRoll });

# ,20231011110446-ModulePlan.js,20231011110449-Module.js,20231011120219-Language.js