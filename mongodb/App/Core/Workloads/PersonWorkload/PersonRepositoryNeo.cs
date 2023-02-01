﻿using AutoMapper;
using FamilyTreeMongoApp.Core.Util;
using FamilyTreeMongoApp.Core.Workloads.CompanyWorkload;
using FamilyTreeMongoApp.Model.Person;
using LeoMongo;
using LeoMongo.Database;
using LeoMongo.Transaction;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using Neo4j.Driver;
using Neo4jClient;

namespace FamilyTreeMongoApp.Core.Workloads.PersonWorkload;

public class PersonRepositoryNeo : IPersonRepository
{
    private IDriver _driver;
    private ILogger<PersonRepository> _logger;
    private readonly IMapper _mapper;

    /// <summary>
    /// Initializes a new instance of the <see cref="PersonRepository"/> class.
    /// </summary>
    public PersonRepositoryNeo(IDriver driver, ILogger<PersonRepository> logger, IMapper mapper)
    {
        _driver = driver;
        _logger = logger;
        _mapper = mapper;
    }

    public string CollectionName => "person";

    public Task<Person> AddPerson(Person request)
    {
        throw new NotImplementedException();
    }

    public Task DeletePerson(ObjectId objectId)
    {
        throw new NotImplementedException();
    }

    public Task<int> GetAccomplishmentsCount(ObjectId objectId)
    {
        throw new NotImplementedException();
    }

    public Task<IEnumerable<PersonDto>> GetDescendants(ObjectId objectId)
    {
        throw new NotImplementedException();
    }

    public Task<IEnumerable<Person>> GetDescendantsInCompany(ObjectId objectId, Company company)
    {
        throw new NotImplementedException();
    }

    public Task<IReadOnlyCollection<Person>> GetPeopleByParents(ObjectId? motherId, ObjectId? fatherId)
    {
        throw new NotImplementedException();
    }

    public async Task<IEnumerable<Person>> GetPeopleBySex(string? sex)
    {
        using (var session = _driver.AsyncSession())
        {
            return await session.ExecuteReadAsync(async tx => {
                var result = await tx.RunAsync("MATCH (p:Person) RETURN p.firstname AS firstname, p.lastname AS lastname, p.sex AS sex;");
                return await result.ToListAsync(p=> {
                    return new Person() {
                    Firstname = p["firstname"].As<string>(), 
                    Lastname = p["lastname"].As<string>(), 
                    Sex = p["sex"].As<string>(), 
                };});
            });
        }
    }

    public Task<IReadOnlyCollection<Person>> GetPeopleWithNoParents()
    {
        throw new NotImplementedException();
    }

    public Task<Person?> GetPersonById(ObjectId objectId)
    {
        throw new NotImplementedException();
    }

    public Task<Person> UpdatePerson(
        ObjectId id,
        string firstname,
        string lastname,
        ObjectId? motherId,
        ObjectId? fatherId,
        string personSex,
        Location? BirthPlace,
        ObjectId? Job,
        ObjectId? Company)
    {
        throw new NotImplementedException();
    }
}