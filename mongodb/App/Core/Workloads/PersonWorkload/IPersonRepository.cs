﻿using FamilyTreeMongoApp.Model.Person;
using LeoMongo.Database;
using MongoDB.Bson;

namespace FamilyTreeMongoApp.Core.Workloads.PersonWorkload;

public interface IPersonRepository : IRepositoryBase
{
    Task<Person> AddPerson(Person request);
    Task<IEnumerable<Person>> GetPeopleBySex(string? sex);
    Task<Person?> GetPersonById(ObjectId objectId);
    Task<IReadOnlyCollection<Person>> GetPeopleWithNoParents();
    Task<IReadOnlyCollection<Person>> GetPeopleByParents(ObjectId? motherId, ObjectId? fatherId);
    Task<Person> UpdatePerson(ObjectId id,string firstname,string lastname,ObjectId? motherId,ObjectId? fatherId,string personSex,Location? BirthPlace,ObjectId? Job,ObjectId? Company);
    Task DeletePerson(ObjectId objectId);
    Task<int> GetAccomplishmentsCount(ObjectId objectId);
}